#!/usr/bin/env python3

def cashify(fn):
    def wrap():
        print("$$$$")
        fn()
        print("$$$$")
    return wrap

@cashify
def sayHello():
    print("hello!")

sayHello()
