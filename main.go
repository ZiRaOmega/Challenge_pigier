package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

const port = ":8000"

type quest []struct {
	question string
	dif      int
	theme    string
}

func index(w http.ResponseWriter, r *http.Request) {
	p := 0
	if r.URL.Path != "/" {
		t := template.Must(template.ParseFiles("./templates/html/404.html"))
		t.Execute(w, struct {
			Success bool
			Value   int
		}{true, p})
		return
	}
	t := template.Must(template.ParseFiles("./templates/html/index.html"))
	t.Execute(w, struct {
		Success bool
		Value   int
	}{true, p})
}

func main() {
	http.Handle("/templates/", http.StripPrefix("/templates/", http.FileServer(http.Dir("templates"))))
	http.HandleFunc("/", index)
	fmt.Println("(http://localhost:8000): Server started on port", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal(err)
	}
}
