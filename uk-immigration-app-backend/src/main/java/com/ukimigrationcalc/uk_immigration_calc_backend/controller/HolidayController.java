package com.ukimigrationcalc.uk_immigration_calc_backend.controller;

import com.ukimigrationcalc.uk_immigration_calc_backend.model.Holiday;
import com.ukimigrationcalc.uk_immigration_calc_backend.service.HolidayService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HolidayController {

    private HolidayService holidayService;

    @GetMapping("/api/holidays")
    public List<Holiday> getHolidays(@RequestParam int year) {

        return holidayService.getHolidaysForYear(year);
    }
}

