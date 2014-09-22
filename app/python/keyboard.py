#!/usr/bin/python
import pykeyboard
import time
import sys

class Keyboard:
  """The class Keyboard is a simple library of basing functions.""";
  tp       = 1;
  py       = pykeyboard.PyKeyboard();

  def __init__(self, ac, av):
    """The function defines the key and calls
       the function of keyboard's press.""";
    self.c = None;

    if (ac > 0):
      self.c = str(av[ac] + '_key');
    if (self.c is not None):
      Keyboard.ft_press(self);

  def ft_press(self):
    """The function press the key.""";
    py     =  Keyboard.py;
    tp     =  int(Keyboard.tp);
    c      =  int(py.__dict__[self.c]);

    py.press_key(c);
    time.sleep(tp);
    py.release_key(c);

if (__name__ == '__main__'):
  Keyboard(len(sys.argv) - 1, sys.argv);
