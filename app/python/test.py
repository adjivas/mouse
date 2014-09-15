#!/usr/bin/python
from pymouse import PyMouseEvent

class Clickonacci(PyMouseEvent):
    def __init__(self):
        PyMouseEvent.__init__(self)

    def click(self, x, y, button, press):
        if button == 1:
            if press:
                print('end')
                self.stop()
        else:
            print('end')
            self.stop()

C = Clickonacci()
C.run()
