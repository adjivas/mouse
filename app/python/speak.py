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
