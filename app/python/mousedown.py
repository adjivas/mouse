#!/usr/bin/python
from pymouse import PyMouseEvent
import time

class Door(PyMouseEvent):
  def __init__(self):
    PyMouseEvent.__init__(self);

  def click(self, x, y, button, press):

    if (press == True):
      print('{"x": ' + str(x) + ', "y": ' + str(y) + '}');
      self.stop();

if (__name__ == '__main__'):
  C = Door();
  C.run();
