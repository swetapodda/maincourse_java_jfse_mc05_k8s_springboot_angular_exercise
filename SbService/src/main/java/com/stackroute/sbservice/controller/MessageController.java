package com.stackroute.sbservice.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
//@CrossOrigin - is to allow requests from certain origin, here it is set to allow from all origins

@RestController
@RequestMapping("/message")
@CrossOrigin(origins = "*")
public class MessageController {
    //@value to get value from application.yml file
    @Value("${app.message}")
    private String message;

    @GetMapping
    public String message(){
        return message;
    }
}