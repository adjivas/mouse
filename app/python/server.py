# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    transparency.py                                    :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from win32gui import GetForegroundWindow;
from win32gui import GetWindowText;

import win32con
import win32gui
import winxpgui
import win32api
import subprocess
import time

class Transparency():
  def alpha(self, args):
    """The function make transparency on the current window.""";
    alpha = int(args['alpha']);
    id = GetForegroundWindow();

    win32gui.SetWindowLong(id, win32con.GWL_EXSTYLE, win32gui.GetWindowLong(
      id, win32con.GWL_EXSTYLE
    ) | win32con.WS_EX_LAYERED )
    win32gui.SetLayeredWindowAttributes(id, 100, alpha, win32con.LWA_ALPHA)

# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    keyboard.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import pykeyboard
import win32api;
import win32con;
import win32com.client

class Keyboard():
  """The class Keyboard is a simple library of basing functions.""";
  py  = pykeyboard.PyKeyboard();
  w32 = win32com.client.Dispatch("WScript.Shell");

  def press(self, args):
    """The function press the key.""";
    py     = Keyboard.py;
    key    = str(args['key']);

    if (len(key) != 1):
      key += '_key';
      key  = int(py.__dict__[key]);
    else:
      key  = str(key);
    py.press_key(key);

  def release(self, args):
    """The function release the key.""";
    py  =  Keyboard.py;
    key =  str(args['key']);

    if (len(key) != 1):
      key += '_key';
      key  = int(py.__dict__[key]);
    else:
      key  = str(key);
    py.release_key(key);

  def tap(self, args):
    """The function press and release the key.""";
    py  =  Keyboard.py;
    key =  str(args['key']);

    if (len(key) != 1):
      key += '_key';
      key  = int(py.__dict__[key]);
    else:
      key  = str(key);
    py.tap_key(key);

    
  def shell(self, args):
    """The function is a special shell.""";
    shell = Keyboard.w32;
    key   = str(args['key']);
    
    shell.SendKeys(key);

# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    mouse.py                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from pymouse import PyMouse;

class Mouse():
  """The class Mouse is a simple library of event's basing functions.""";
  py      = PyMouse();
  x_limit = int(py.screen_size()[0]);
  y_limit = int(py.screen_size()[1]);

  def move(self, args):
    """The function moves the mouse.""";
    x = int(float(args['x']) + float(Mouse.py.position()[0]));
    y = int(float(args['y']) + float(Mouse.py.position()[1]));

    Mouse.py.move(x, y);

  def warp(self, args):
    """The function warps the mouse.""";
    x = int(float(args['x']));
    y = int(float(args['y']));

    Mouse.py.move(x, y);

  def press(self, args):
    """The function press one click.""";
    x = int(Mouse.py.position()[0]);
    y = int(Mouse.py.position()[1]);

    Event.py.capture = False;
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, x, y, 0, 0);
    Event.py.capture = True;

  def release(self, args):
    """The function release one click.""";
    x = int(Mouse.py.position()[0]);
    y = int(Mouse.py.position()[1]);

    Event.py.capture = False;
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, x, y, 0, 0);
    Event.py.capture = True;

  def click(self, args):
    """The function do one click.""";
    x = int(Mouse.py.position()[0]);
    y = int(Mouse.py.position()[1]);
    c = int(args['click']);

    Event.py.capture = False;
    Mouse.py.click(x, y, c);
    Event.py.capture = True;


# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    event.py                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from pymouse import PyMouseEvent;

class Event(PyMouseEvent):
  py = None;

  def click(self, x, y, button, press):
    if (press):
      Server().send('mousedown', str(button));
    else:
      Server().send('mouseup', str(button));

class Eventcall():
  def capture(self, args):
    Event.py.capture = args['stop'];

# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    server.py                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import sys;

import json;
import socket;

class Server():
  socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM);
  connct = None;

  def init(self, address, buffer):
    Server.socket.bind(address);
    Server.socket.listen(1);
    Server.connct, addr = Server.socket.accept();
    Server.send(self, 'connect', 'hello');
    Event.py = Event();
    Event.py.capture = False;
    Event.py.start();
    Server.loop(self, buffer);
    Server.connct.close();
    Event.py.stop();

  def loop(self, buffer):
    while (42):
      data = Server.connct.recv(buffer);
      if not (data):
        break ;
      else:
        data = json.loads(data);
        if (data['event']['class']):
          Server.call(self, data);

  def call(self, data):
    event = data['event']['class'] + data['event']['method'];

    if (data['event']['class'] == 'mouse'):
      content = getattr(Mouse(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'keyboard'):
      content = getattr(Keyboard(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'transparency'):
      content = getattr(Transparency(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'event'):
      content = getattr(Event(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'eventcall'):
      content = getattr(Eventcall(), data['event']['method'])(data['content']);
    if (content):
      Server.send(self, event, content);

  def send(self, event, content):
    send = str(json.dumps({
      'event': event,
      'content': content
    }));
    lend = 200 - len(send);

    send += lend * ' ';
    Server.connct.send(send);

if (__name__ == '__main__'):
  ip = str(sys.argv[1]);
  port = int(sys.argv[2]);
  buffer = int(sys.argv[3]);

  Server().init((ip, port), buffer);
