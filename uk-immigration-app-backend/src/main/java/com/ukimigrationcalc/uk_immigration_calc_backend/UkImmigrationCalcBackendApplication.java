package com.ukimigrationcalc.uk_immigration_calc_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class UkImmigrationCalcBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(UkImmigrationCalcBackendApplication.class, args);
    }
}
