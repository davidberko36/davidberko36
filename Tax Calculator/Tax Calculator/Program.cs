// See https://aka.ms/new-console-template for more information
using System.ComponentModel.Design;

static void FindTax(int userSalary)
{
    int remainder = userSalary - 100;
    int takeHome = 0;

    if(remainder <= 0)
    {
        takeHome = userSalary;
    }
    else if(remainder > 0 && remainder <= 200)
    {
        int taxedAmount1 = remainder;
        double taxPaid1 = taxedAmount1 * 0.05;
        takeHome = userSalary - (int) taxPaid1;
    }
    else
    {
        int taxedAmount1 = 200;
        int remainder1 = remainder - taxedAmount1;
        double taxPaid1 = taxedAmount1 * 0.05;

        if (remainder1 >0 && remainder1 <= 500) {
            int taxedAmount2 = remainder1;
            double taxPaid2 = taxedAmount2 * 0.1;
            takeHome = userSalary - (int)(taxPaid1 + taxPaid2);
        } else
        {
            int taxedAmount2 = 500;
            int remainder2 = remainder1 - taxedAmount2;
            double taxPaid2 = taxedAmount2 * 0.1;
            
            if (remainder2 > 0)
            {
                int taxedAmount3 = remainder2;
                double taxPaid3 = taxedAmount3 * 0.2;
                takeHome = userSalary - (int)(taxPaid1 + taxPaid2 + taxPaid3);
            }
        }
    }
    Console.WriteLine($"Hello, net income is ${takeHome}");
}




Console.WriteLine("================Hello User================");
Console.WriteLine("==========Welcome To The Tax Calculation System==========");
Console.Write("Please enter your name: ");
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");
Console.Write("Please enter your salary: ");
if (int.TryParse(Console.ReadLine(), out int userSalary))
{
    FindTax(userSalary);
}