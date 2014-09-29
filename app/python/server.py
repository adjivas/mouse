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

import speech

class Speak():
  def say(self, args):
    speech.say(args['sentence']);

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

class Keyboard():
  """The class Keyboard is a simple library of basing functions.""";
  py = pykeyboard.PyKeyboard();

  def press(self, args):
    """The function press the key.""";
    py  =  Keyboard.py;
    key =  str(args['key']);
    key += '_key';
    key =  int(py.__dict__[key]);

    py.press_key(key);
    py.release_key(key);

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
    """The function safes x and y and moves
       the mouse.""";
    x = int(float(args['x']) + float(Mouse.py.position()[0]));
    y = int(float(args['y']) + float(Mouse.py.position()[1]));

    Mouse.py.move(x, y);
    return ('{"x": ' + str(x) + ', "y": ' + str(y) + '}');

  def click(self, args):
    """The function safes x and y and moves
       the mouse.""";
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
    event   = data['event']['class'] + data['event']['method'];

    if (data['event']['class'] == 'mouse'):
      content = getattr(Mouse(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'keyboard'):
      content = getattr(Keyboard(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'event'):
      content = getattr(Event(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'eventcall'):
      content = getattr(Eventcall(), data['event']['method'])(data['content']);
    elif (data['event']['class'] == 'speak'):
      content = getattr(Speak(), data['event']['method'])(data['content']);
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
  Server().init(('127.0.0.1', 1337), 200);
