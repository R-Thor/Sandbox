#include "Header.h"

struct Book MasterBookArray[];

struct Book * CreateBook(char title[50], char author[50], char subject[100], int book_id)
{
	struct Book book;
	struct Book *ptr_Book = &book;
	strcpy(&(*ptr_Book).title, "C Programming");
	strcpy(&(*ptr_Book).author, "Nuha Ali");
	strcpy(&(*ptr_Book).subject, "C Programming Tutorial");
	ptr_Book->book_id = 6495407;
	return ptr_Book;
}

/*struct Book * */ void AddBook(struct Book book)
{
	//struct Book bookArray[] = { book };
	int x = sizeof(*MasterBookArray)/sizeof(struct Book);
	struct Book a; 
	a = *MasterBookArray;
	//return bookArray;
}

