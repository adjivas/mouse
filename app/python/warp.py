#!/usr/bin/python
from pymouse import PyMouse
import sys

class Mouse:
	"""The class Mouse is a simple library of basing functions."""
	py = PyMouse()
	x  = 0
	y  = 1

	def __init__(self, ac, av):
		"""The function defines x and y and calls
		   the function of mouse's move."""
		x      = int(Mouse.x)
		y      = int(Mouse.y)
		self.x = int(0)
		self.y = int(0)

		av.pop(0)
		if (ac > x):
			self.x = int(av[x])
		if (ac > y):
			self.y = int(av[y])
		Mouse.ft_move(self)
	def ft_move(self):
		"""The function safes x and y and moves
		   the mouse."""
		x  = int(Mouse.x)
		y  = int(Mouse.y)
		lx = int(Mouse.py.screen_size()[x])
		ly = int(Mouse.py.screen_size()[y])

		if ((0 <= self.x <= lx) == False):
			self.x = 0 if (self.x < 0) else lx
		if ((0 <= self.y <= ly) == False):
			self.y = 0 if (self.y < 0) else ly
		Mouse.py.move(self.x, self.y)

if (__name__ == '__main__'):
	Mouse(len(sys.argv) - 1, sys.argv)
