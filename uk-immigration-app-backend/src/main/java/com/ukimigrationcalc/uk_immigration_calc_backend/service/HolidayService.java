package com.ukimigrationcalc.uk_immigration_calc_backend.service;

import com.ukimigrationcalc.uk_immigration_calc_backend.dto.HolidayResponseDto;
import com.ukimigrationcalc.uk_immigration_calc_backend.model.Holiday;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;


@Service
public class HolidayService {
    private static final String BASE_URL = "https://date.nager.at/api/v3/PublicHolidays";

    public List<Holiday> getHolidaysForYear(int year) {
        String url = BASE_URL + "/" + year + "/GB";

        RestTemplate restTemplate = new RestTemplate();
        HolidayResponseDto[] response = restTemplate.getForObject(url, HolidayResponseDto[].class);

        List<Holiday> holidaysList = new ArrayList<>();

        if (response == null) {
            return new ArrayList<>();
        }
        for (HolidayResponseDto h : response) {
            holidaysList.add(new Holiday(h.getName(), h.getDate()));
        }


        return holidaysList;
    }


}
