package com.example.demo.news;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface NewsRepository extends PagingAndSortingRepository<News, Long> {
    Page<News> findAllByOrderByIdDesc(Pageable pageable);
    Page<News> findAllBySourceInOrderByIdDesc(Set<String> sources, Pageable pageable);
    Page<News> findAllByTopicInOrderByIdDesc(Set<String> topics, Pageable pageable);
    News findByTitle(String title);
}
