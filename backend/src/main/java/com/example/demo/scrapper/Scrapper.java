package com.example.demo.scrapper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.io.IOException;
import java.util.List;

@Configuration
@EnableScheduling
public class Scrapper {

    @Autowired
    NewsRepository newsRepository;

    @Scheduled(fixedDelay = 100000)
    public void scrapeData() {
        getTheVergeNews("https://www.theverge.com/tech");
        getTheVergeNews("https://www.theverge.com/entertainment");
        getSkySportsNews();
        getReutersNews();
        getTheEpochTimesNews();
    }

    private void getTheEpochTimesNews() {
        try {
            Document document = Jsoup.connect("https://www.theepochtimes.com/c-arts-culture").get();
            Elements links = document.select(".article_info > .title > a");
            for (Element link : links) {
                Document newsPage = Jsoup.connect(link.attr("href")).get();
                Elements textBlocks = newsPage.select(".post_content > p");
                StringBuilder newsText = new StringBuilder();
                for (Element textBlock : textBlocks) {
                    newsText.append(textBlock.text());
                }

                News news = new News();

                String imageUrl = "";
                Elements newsImages = newsPage.select(".featured_img img");
                if (newsImages.size() > 0) {
                    imageUrl = newsImages.get(0).attr("src");
                }

                String title = newsPage.select(".post_title h1 span").text();

                if (title.length() > 0 && !isArticleAlreadyScrapped(title)) {
                    news.setImageUrl(imageUrl);
                    news.setSource("The Epoch Times");
                    news.setTitle(title);
                    news.setTopic("Arts & Culture");
                    news.setArticleText(newsText.toString());
                    newsRepository.save(news);
                }
            }
        } catch (IOException | IllegalArgumentException  e) {
            e.printStackTrace();
        } catch (DataIntegrityViolationException e) {
            System.out.println("Duplicate news found");
        }
    }


    private void getReutersNews() {
        try {
            Document document = Jsoup.connect("https://www.reuters.com/business/").get();
            Elements links = document.select("a.story-card");
            for (Element link : links) {
                Document newsPage = Jsoup.connect("https://www.reuters.com" + link.attr("href")).get();
                Elements textBlocks = newsPage.select(".paywall-article > p");
                StringBuilder newsText = new StringBuilder();
                for (Element textBlock : textBlocks) {
                    newsText.append(textBlock.text());
                }

                News news = new News();

                String imageUrl = "";
                Elements newsImages = newsPage.select("article img");
                if (newsImages.size() > 0) {
                    imageUrl = newsImages.get(0).attr("src");
                }

                String title = newsPage.select("h1").text();

                if (title.length() > 0 && !isArticleAlreadyScrapped(title)) {
                    news.setImageUrl(imageUrl);
                    news.setSource("Reuters");
                    news.setTitle(title);
                    news.setTopic("Business");
                    news.setArticleText(newsText.toString());
                    newsRepository.save(news);
                }
            }
        } catch (IOException | IllegalArgumentException  e) {
            e.printStackTrace();
        } catch (DataIntegrityViolationException e) {
            System.out.println("Duplicate news found");
        }
    }

    private void getSkySportsNews() {
        try {
            Document document = Jsoup.connect("https://www.skysports.com/news-wire").get();
            Elements links = document.select("a.news-list__figure");
            for (Element link : links) {
                Document newsPage = Jsoup.connect(link.attr("href")).get();
                Elements textBlocks = newsPage.select(".sdc-article-body > p");
                StringBuilder newsText = new StringBuilder();
                for (Element textBlock : textBlocks) {
                    newsText.append(textBlock.text());
                }

                News news = new News();

                String imageUrl = "";
                Elements newsImages = newsPage.select("img.sdc-article-image__item");

                if (newsImages.size() > 0) {
                    imageUrl = newsImages.get(0).attr("src");
                }

                String title = newsPage.select(".sdc-article-header__long-title").text();

                if (title.length() > 0 && !isArticleAlreadyScrapped(title)) {
                    news.setImageUrl(imageUrl);
                    news.setSource("Sky Sports");
                    news.setTitle(title);
                    news.setTopic("Sports");
                    news.setArticleText(newsText.toString());
                    newsRepository.save(news);
                }
            }
        } catch (IOException | IllegalArgumentException  e) {
            e.printStackTrace();
        } catch (DataIntegrityViolationException e) {
            System.out.println("Duplicate news found");
        }
    }

    private void getTheVergeNews(String URL) {
        try {
            Document document = Jsoup.connect(URL).get();
            Elements links = document.select("h2.c-entry-box--compact__title:not(.c-entry-box--group-4-up__title-haslogo)");
            for (Element link : links) {
                Document newsPage = Jsoup.connect(link.child(0).attr("href")).get();
                Elements textBlocks = newsPage.select(".c-entry-content > p");
                StringBuilder newsText = new StringBuilder();
                for (Element textBlock : textBlocks) {
                    newsText.append(textBlock.text());
                }

                News news = new News();

                String imageUrl = "";
                Elements newsImages = newsPage.select("picture.c-picture > img");

                if (newsImages.size() > 0) {
                    imageUrl = newsImages.get(0).attr("src");
                }

                String title = newsPage.select("h1.c-page-title").text();

                if (title.length() > 0 && !isArticleAlreadyScrapped(title)) {
                    news.setImageUrl(imageUrl);
                    news.setSource("The Verge");
                    news.setTitle(title);
                    news.setTopic("Tech");
                    news.setArticleText(newsText.toString());
                    newsRepository.save(news);
                }
            }
        } catch (IOException | IllegalArgumentException  e) {
            e.printStackTrace();
        } catch (DataIntegrityViolationException e) {
            System.out.println("Duplicate news found");
        }
    }

    private boolean isArticleAlreadyScrapped(String title) {
        List<News> news = this.newsRepository.findAll();

        for(News article : news) {
            if (article.getTitle().equals(title)) {
                return true;
            }
        }

        return false;
    }
}
