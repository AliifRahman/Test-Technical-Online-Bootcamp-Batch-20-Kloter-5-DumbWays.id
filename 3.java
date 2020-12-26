import java.util.Scanner;

public class 3
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Cetak pola():");

        int rows = scanner.nextInt();

        
        for (int i=rows; i>=1; i--)
        {
            for (int k=1; k<=(i * 2) -1; k++) 
            { 
                System.out.print("  *"); 
            } 
            System.out.println(); 

            for (int j=rows; j>=i; j--)
            {
                System.out.print(" ");
            }
            
        }
        scanner.close();
    }
}
