all: eutf8 easc

eutf8: eutf8_main.c eutf8.c eutf8.h
	gcc -o eutf8 eutf8.c eutf8_main.c

easc: easc_main.c easc.c easc.h
	gcc -o easc easc.c easc_main.c

eutf8_test: eutf8_test.c eutf8.c eutf8.h
	gcc -o eutf8_test eutf8.c eutf8_test.c

easc_test: easc_test.c easc.c easc.h
	gcc -o easc_test easc.c easc_test.c

test: eutf8_test easc_test
	./eutf8_test
	./easc_test

ifeq ($(OS),Windows_NT)
clean:
	del /Q /F eutf8 eutf8.exe easc easc.exe eutf8_test eutf8_test.exe easc_test easc_test.exe
else
clean:
	rm -f eutf8 eutf8.exe easc easc.exe eutf8_test eutf8_test.exe easc_test easc_test.exe
endif
