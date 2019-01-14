package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("public")))
	err := http.ListenAndServe(":7777", nil)
	if nil != err {
		panic(err)
	}
}
