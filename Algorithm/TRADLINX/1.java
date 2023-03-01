/**
 * 주 5일제 회사에 휴가를 내고 n일간 여행을 간다. 이때 언제 휴가를 쓰느냐에 따라 휴일이 달라진다.
 * 즉 6일을 여행하는데 월요일부터 여행하면 하루만 포함, 금요일부터 여행하면 이틀이 포함된다.
 * 주어진 n (10^15 이하의 자연수)에 대해 return 하는 배열의 첫번쨰 원소는 최소값, 두 번째 원소는 최대값을 반환.
 */

class Solution
{
    public static int WEEK_DAY = 5;
    public static int DAY_OF_WEEK = 7;
    public static int DAY_OF_WEEKEND = 2;

    public long[] solution(long n)
    {
        long []answer = {0,0};
        long week = n / DAY_OF_WEEK;
        long restDays = n % DAY_OF_WEEK;

        answer[0] = calculateMin(week, restDays);
        answer[1] = calculateMax(week, restDays);
        return answer;
    }

    public long calculateMin(long week, long restDays) {
        long additional = restDays > WEEK_DAY ? restDays - WEEK_DAY : 0;
        return DAY_OF_WEEKEND * week + additional;
    }

    public long calculateMax(long week, long restDays) {
        if (restDays == 0) {
            return DAY_OF_WEEKEND * week;
        }

        long additional = restDays >= DAY_OF_WEEKEND ? DAY_OF_WEEKEND : DAY_OF_WEEKEND - restDays;
        return DAY_OF_WEEKEND * week + additional;
    }
}
