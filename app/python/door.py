#!/usr/bin/python
from pymouse import PyMouseEvent
import time

class Door(PyMouseEvent):
  start    = None;
  end      = None;

  def __init__(self):
    PyMouseEvent.__init__(self);

  def click(self, x, y, button, press):
    if (press == True):
      Door.start = time.time();
    else:
      Door.end = time.time();
      self.stop();
      print('{"start": ' + str(Door.end if (Door.start is None) else Door.start) + ', "end": ' + str(Door.end) + '}');

C = Door();
C.run();
