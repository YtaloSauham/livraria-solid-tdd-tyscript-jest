export default class MyDate extends Date{
    addDays(days){
        this.setDate(this.getDate() + days);
    }
}