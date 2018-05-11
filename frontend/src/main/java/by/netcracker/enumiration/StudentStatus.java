package by.netcracker.enumiration;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public final class StudentStatus {
    public static final String AVAILABLE_STUDENT = "Available";
    public static final String ON_PRACTICE_STUDENT = "OnPractice";
    public static final String WAITING_STUDENT = "Waiting";

    public static String compareDate(String startDate, String finishDate) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        sdf.setTimeZone(TimeZone.getDefault());
        Date current = new Date();
        Date start = null;
        Date finish = null;
        try {
            start = sdf.parse(startDate);
            finish = new Date(sdf.parse(finishDate).getTime() + 86400000);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        if (current.before(start) && current.before(finish)){
            return WAITING_STUDENT;
        } else if (current.after(start) && current.before(finish)){
            return ON_PRACTICE_STUDENT;
        } else if (current.after(start) && current.after(finish)){
            return AVAILABLE_STUDENT;
        }

        return AVAILABLE_STUDENT;
    }
}
