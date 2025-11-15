package com.ukimigrationcalc.uk_immigration_calc_backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all API paths
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
