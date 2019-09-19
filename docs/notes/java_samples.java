C:\Users\0011441261\IdeaProjects\webserver\src\main\java

import java.lang*

public class MaxNumber {

	public static void main(String[] args){

	int a =7;
	int b =9;
	int c= maxNumber(a,b);
	System.out.printIn("Max number is: " + c);
	}
	/*returns the max value of two numbers */
	public static int maxNumber(int n1, int n2){
	int max;
	int n1;
	int n2;
	if (n1 > n2) 
		max = n1;
	else
		max = n2;
	
	return max;
	}

}

import java.lang*

public class RankNumbers{
	public static void main(String[], args){
		methodRankNum(172);
	}
	/*method for ranking numbers*/
	private static void methodRankNum(double num){
		if (num > 150) {
			System.out.printIn("Your rank is A");
		}else if (num >100) {
			System.out.printIn("Your rank is B");
		}else {
			System.out.printIn("Your rank is C");
	}
	}
}

public class Dog{
	Dog(String name, String race, Integer age){
		//this constructor has 3 parameters
		System.out.printIn("Passed parameters are: " + name + race + age);
	}
	public static void main(String []args){
		//initiliaze object
		Dog myNewDog = new Dog("alfred", "kangal", "2");
	}
}

public class Sample{
	public static void main(String []args){
		String helloWorld = "Hello World How are you?";
		int lengthOfhellWorld = helloWorld.length();
		System.out.printIn("The length of helloWorld is: ", lengthOfhellWorld);
	}
}

import java.io.*;

public class StreamSample {
    public static void main(String[] args){
        try {
            byte[] byteSample = {12,45,33,8,77};
            OutputStream os = new FileOutputStream("input.txt");
            for (int x = 0; x < byteSample.length; x++){
                os.write(byteSample[x]);
            }
            os.close();
            InputStream is = new FileInputStream("input.txt");
            int size = is.available();
            for (int i = 0; i < size; i++ ){
                System.out.println((char)is.read() + "");
            }
            is.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

package com.aciapp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;


    @Controller
    @SessionAttributes("name")
    public class LoginController{
       @Autowired
       LoginService service;

       @RequestMapping(value = "/login", method = RequestMethod.GET)
        public String showLoginPage(ModelMap model){
           return "login";
       }

       @RequestMapping(value = "/login", method = RequestMethod.POST)
        public String showWelcomePage(ModelMap model, @RequestParam String name, @RequestParam String password){

           boolean isValidUser = service.validateUser(name, password);
           if(!isValidUser){
               model.put( "errorMessage","Invalid Credentials" );
               return "login";
           }
           model.put( "name", name );
           model.put( "password", password );
           return "welcome";
       }
    }

(boolean sedef,boolean vesvese, boolean belagrisi, boolean kotudusunce, boolean seksvesiddet, boolean psoriasis, boolean hernia, boolean backpain, boolean alkolarzusu, boolean obsession


/**
 * This function tries to see how much of the smallest rectangle intersects 
 * the with the larger one. In this case we call the rectangles a and b and we 
 * give them both two points x1,y1 and x2, y2.
 * 
 * First we check for the rightmost left coordinate. Then the leftmost right 
 * coordinate and so on. When we have iLeft,iRight,iTop,iBottom we try to get the 
 * intersection points lenght's right - left and bottom - top.
 * These lenght's we multiply to get the intersection area.
 *
 * Lastly we return the result of what we get when we add the two areas 
 * and remove the intersection area.
 * 
 * @param xa1       left x coordinate   A
 * @param ya1       top y coordinate    A
 * @param xa2       right x coordinate  A
 * @param ya2       bottom y coordinate A
 * @param xb1       left x coordinate   B
 * @param yb1       top y coordinate    B
 * @param xb2       right x coordinate  B
 * @param yb2       bottom y coordinate B
 * @return          Total area without the extra intersection area.
 */

public static float mostlyIntersects(float xa1, float ya1, float xa2, float ya2, float xb1, float yb1, float xb2, float yb2) {
    float iLeft = Math.max(xa1, xb1);
    float iRight = Math.min(xa2, xb2);
    float iTop = Math.max(ya1, yb1);
    float iBottom = Math.min(ya2, yb2);

    float si = Math.max(0, iRight - iLeft) * Math.max(0, iBottom - iTop);
    float sa = (xa2 - xa1) * (ya2 - ya1);
    float sb = (xb2 - xb1) * (yb2 - yb1);

    return sa + sb - si;
}

public class Trials {
	
	public static void main(String[] args){
		Scanner scnr = new Scanner(System.in);
		System.out.printIn("Enter the number: ");
		while(number != 0){
			number = scnr.nextIn();
			System.out.printIn("%d is a prime number? %s ", number, isPrime(number));	
		}
		
		public boolean isPrime(int number){
			if (number = 2 || number = 3){
				return true;
			}
			if(number % 2 = 0){
				return false;
			}
			int sqt = (int) Math.round(Math.Sqrt(number));
			for(i = 5, i=<sqt, i += 2){
				if (number % i==0){
					return false;
				}
			}
			return true;
			}
		}
	}
	
class checkPalindromi{
	
	public static void main(String[] args){
		String inputStr, reversedStr = "";
		Scanner istr = new Scanner(System.in);
		System.out.println("Enter the word; ");
		inputStr = istr.nextLine();
		Int length = inputStr.length();
		for(int i; i<length; i++){
			reversedStr += inputStr.atChar(length-1 - i);
		}
		if (reversedStr == inputStr){
			System.out.printIn(inputStr + "is palindromic");
		} else {
			System.out.printIn(inputStr + "is not palindromic");
		}
 	}
}

import java.util.*

class FindPrimes{
	public static void main(String[] args){
		Scanner scnr = new Scanner(System.in);
		int input;
		System.out.printline("Please enter the number for prime query: ");
		while(input != 0){
			input = scnr.nextInt();
			System.out.printline("The number %d is a prime? %s" + input + isPrime(input));
			
			public boolean isPrime(int input){
			if (input == 2 || input == 3){
				return true;
			}
			else if(input % 2 == 0){
				return false;
			} else if{
				sqt = (int)Math.round(Math.Sqrt(input));
				for (int i =5; i<=sqt; i=+2)
				if (sqt % i == 0){
					return false;
				}
			}					
				else {
					return true;
				}
			
		
		}
	
	}
	
}

