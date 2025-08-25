import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int x = sc.nextInt();
        
        boolean isfound = false;
        
        for (int i = 0;i < n ;i++ ){
            int ce = sc.nextInt();
            if(ce == x){
                isfound = true;
            }
        }
        
        if (isfound){
            System.out.println("YES");
        }
        else{
            System.out.println("NO");
        }
        
        sc.close();
	}
}
