#include <stdio.h>
#include "Book.h"


int main(int argc, char* argv[])
{
	struct Book *b = CreateBook("C Programming", "Nuha Ali", "C Programming Tutorial", 6495407);
	struct Book b2 = *b;
	printf("Title:   %s\n", b2.title);
	printf("Author:  %s\n", b2.author);
	printf("Subject: %s\n", b2.subject);
	printf("Book_id: %d\n", b2.book_id);
	AddBook(b2);
	getch();
	return 0;
}

void PrintMasterBookList()
{

}