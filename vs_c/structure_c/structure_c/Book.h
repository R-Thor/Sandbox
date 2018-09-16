#pragma once
#define _CRT_SECURE_NO_WARNINGS
#define n 1
struct Book {
	char  title[50];
	char  author[50];
	char  subject[100];
	int   book_id;
};

struct Book BookArray[n];

/*struct Book * */void AddBook(struct Book book);

struct Book * CreateBook(char title[50], char author[50], char subject[100], int book_id);

