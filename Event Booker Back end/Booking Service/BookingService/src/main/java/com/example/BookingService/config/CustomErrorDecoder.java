package com.example.BookingService.config;

import feign.Response;
import feign.codec.ErrorDecoder;

public class CustomErrorDecoder implements ErrorDecoder {
    @Override
    public Exception decode(String methodKey, Response response) {
        return new RuntimeException("Event service error: " + response.status() + " - " + response.reason());
    }
}