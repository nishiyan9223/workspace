public class MyAAA {

  public static void main(String[] args) {
    // int score = 80;
    // String msg = score == 80 ? "Good!" : "BAD";

    /*
    if(score > 85) {
      System.out.println("Great");
    }else if(score > 70) {
      System.out.println("Good");
    }else {
      System.out.println("BAD");
    }
    */
    // System.out.println(msg);

    /*
    String signal = "blue";

    switch(signal) {
      case "red":
      case "blue":
        System.out.println("stop!!");
      break;

      default:
        System.out.println("wrong signal");
      break;
    */

    //int i = 0;
    /*
    while(i < 10) {
      System.out.println(i);
      i++;
    }

    do {
      System.out.println(i);
      i++;
    } while(i<10);
    */
    for(int i=0; i<10; i++) {
      if(i==5) {
        continue;
      }
      System.out.println(i+1);
    }

    int[] sales;
    sales = new int[3];
    sales[0] = 1;
    sales[1] = 2;
    sales[2] = 3;
    System.out.println(sales[0]);
    System.out.println(sales[1]);
    System.out.println(sales[2]);

  }
}
