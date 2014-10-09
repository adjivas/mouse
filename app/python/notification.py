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
  font_weight = 'bold';
  background_color = 'black';

  def __init__(self, sentence, show_interval = 2):
    self.root = Tkinter.Label(text = sentence)
    self.root.config(font = (Kinter.font_policy,
                             Kinter.font_size,
                             Kinter.font_weight));
    self.root.config(fg = Kinter.font_color);
    self.root.config(bg = Kinter.background_color);
    self.root.config(bd = 0);
    self.root.config(justify = 'center');
#    self.root.config(width = 2);
    self.root.config(highlightcolor = Kinter.background_color);
    self.root.master.overrideredirect(True);
#    geometry = '+0+' + str(self.root.winfo_screenheight() - 100);
#    self.root.master.geometry(geometry);
#    self.root.master.geometry(geometry);

    self.root.master.lift();
    self.root.master.wm_attributes('-topmost', True);
    self.root.master.wm_attributes('-disabled', True);
    self.root.pack(expand = "yes", fill = "both", side='bottom');
    self.root.after(4000, self.end);

  def end(self):
    self.root.quit();

  def start(self):
    self.root.mainloop();

if __name__ == "__main__":
  sentence = str(sys.argv[1]);
  lauch = Kinter(sentence)
  lauch.start()
