import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { HolidayType } from "../types/HolidayType";

const Holidays = () => {
  const [holidays, setHolidays] = useState<HolidayType[]>([]);
  const [year, setYear] = useState(2025);
  useEffect(() => {
    const fetchHolidays = async () => {
      const response = await fetch(
        `http://localhost:8080/api/holidays?year=${year}`
      );
      const data = await response.json();
      setHolidays(data);
    };

    fetchHolidays();
  }, [year]);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Header />

        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "black",
            textShadow: "2px 2px 2px navy",
          }}
        >
          UK Public & Bank Holidays {year}
        </h2>
        <p>Choose a year to check for the holiday dates.</p>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
        </select>

        {holidays.map((holiday, index) => (
          <li key={index}>
            {holiday.date} - {holiday.name} ({holiday.countryCode})
          </li>
        ))}
        <Footer />
      </Box>
    </div>
  );
};

export default Holidays;
