class Greeter 
{
    greeting: string;
	constructor(message: string) 
	{
	    this.greeting = message;
	}
	
	greet() 
	{
		//test
		return "Hello, " + this.greeting;
	}
}

//let greeter = new Greeter("world");
export { Greeter};