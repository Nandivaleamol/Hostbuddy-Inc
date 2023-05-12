package com.item.management.exception;

import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ProblemDetail onException(RuntimeException exception){
        var problemDetail = ProblemDetail.forStatus(404);
        problemDetail.setDetail(exception.getMessage());
        problemDetail.setStatus(404);
        problemDetail.setTitle("Item Not Found");

        return problemDetail;
    }
}
