# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    speak.py                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#              #
#    Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import speech
import sys

class Speak:
  def __init__(self, ac, av):
    ct = 1;

    while (ct <= ac):
     speech.say(av[ct]);
     ct += 1;

if (__name__ == '__main__'):
  Speak(len(sys.argv) - 1, sys.argv);
