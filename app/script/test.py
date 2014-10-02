# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    kinter.py                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import sys

import Tkinter

class Kinter(object):
  font_policy = 'Times New Roman';
  font_size = '40';
  font_color = 'white';
  background_color = 'black';

  def __init__(self, show_interval=2):
    self.root = Tkinter.Label(text = 'contenue',
                  font = (Kinter.font_policy, Kinter.font_size),
                  fg = Kinter.font_color,
                  bg = Kinter.background_color)
    self.root.master.overrideredirect(True);
    self.root.master.geometry('+350+350');
    self.root.master.lift();
    self.root.master.wm_attributes('-topmost', True);
    self.root.master.wm_attributes('-disabled', True);
    self.root.master.wm_attributes('-transparentcolor', Kinter.background_color);
    self.root.pack();
    self.root.after(4000, self.end);

  def end(self):
    self.root.quit();

  def start(self):
    self.root.mainloop();

if __name__ == "__main__":
  lauch = Kinter()
  lauch.start()
