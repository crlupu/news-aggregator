package com.example.demo.scrapper;

import com.example.demo.news.News;
import com.example.demo.news.NewsRepository;
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
import java.util.Random;

@Configuration
@EnableScheduling
public class Scrapper {

    @Autowired
    NewsRepository newsRepository;

    @Scheduled(fixedDelay = 10000)
    public void scrapeData() {
        scrapeArticles(new Source(
                "https://www.theverge.com/tech",
                "h2.c-entry-box--compact__title:not(.c-entry-box--group-4-up__title-haslogo) a",
                ".c-entry-content > p",
                "picture.c-picture > img",
                "h1.c-page-title",
                "The Verge",
                "tech",
                ""
        ));
        scrapeArticles(new Source(
                "https://www.skysports.com/news-wire",
                "a.news-list__figure",
                ".sdc-article-body > p",
                "img.sdc-article-image__item",
                ".sdc-article-header__long-title",
                "Sky Sports",
                "sports",
                ""
        ));

//        scrapeArticles(new Source(
//                "https://www.theverge.com/entertainment",
//                "h2.c-entry-box--compact__title:not(.c-entry-box--group-4-up__title-haslogo) a",
//                ".c-entry-content > p",
//                "picture.c-picture > img",
//                "h1.c-page-title",
//                "The Verge",
//                "entertainment",
//                ""
//        ));

        scrapeArticles(new Source(
                "https://www.reuters.com/business/",
                "a.story-card",
                ".paywall-article > p",
                "article img",
                "h1",
                "Reuters",
                "business",
                "https://www.reuters.com"
        ));
        scrapeArticles(new Source(
                "https://www.theepochtimes.com/c-arts-culture",
                ".article_info > .title > a",
                ".post_content > p",
                ".featured_img img",
                ".post_title h1 span",
                "The Epoch Times",
                "Arts & Culture",
                ""
        ));
    }

    private void getTheEpochTimesNews() {
        try {
            Document document = Jsoup.connect("https://www.theepochtimes.com/c-arts-culture").get();
            Elements links = document.select(".article_info > .title > a");
            int numberOfArticles = new Random().nextInt(3);
            for (int i = 0; i < links.size() && i < numberOfArticles; i++) {
                Document newsPage = Jsoup.connect(links.get(i).attr("href")).get();
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

    private void scrapeArticles(Source source) {
        try {
            Document document = Jsoup.connect(source.getURL()).get();
            Elements links = document.select(source.getLinksSelector());
            int numberOfArticles = new Random().nextInt(2);
            for (int i = 0; i < links.size() && i < numberOfArticles; i++) {
                Document newsPage = Jsoup.connect(source.getLinkPrefix() + links.get(i).attr("href")).get();
                Elements textBlocks = newsPage.select(source.getTextBlocksSelector());
                StringBuilder newsText = new StringBuilder();
                for (Element textBlock : textBlocks) {
                    newsText.append(textBlock.text());
                }

                News news = new News();

                Elements newsImages = newsPage.select(source.getImageSelector());
                String title = newsPage.select(source.getTitleSelector()).text();

                if (title.length() > 0 && newsImages.size() > 0 && !isArticleAlreadyScrapped(title)) {
                    news.setImageUrl(newsImages.get(0).attr("src"));
                    news.setSource(source.getTitle());
                    news.setTitle(title);
                    news.setTopic(source.getTopic());
                    news.setArticleText(newsText.toString());
                    newsRepository.save(news);
                } else {
                    numberOfArticles++;
                }
            }
        } catch (IOException | IllegalArgumentException  e) {
            e.printStackTrace();
        } catch (DataIntegrityViolationException e) {
            System.out.println("Duplicate news found");
        }
    }
    private boolean isArticleAlreadyScrapped(String title) {
        return this.newsRepository.findByTitle(title) != null;
    }
}
