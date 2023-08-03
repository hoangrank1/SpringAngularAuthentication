package com.angularspring.practicetwo.repository;

import com.angularspring.practicetwo.entities.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FileRepository extends JpaRepository<FileEntity,Long> {
}