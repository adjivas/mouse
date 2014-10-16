from win32gui import GetForegroundWindow;
from win32gui import GetWindowText;

import win32con
import win32gui
import winxpgui
import win32api
import subprocess
import time

time.sleep(1);
id = GetForegroundWindow();
print GetWindowText(id), id;



win32gui.SetWindowLong (id, win32con.GWL_EXSTYLE, win32gui.GetWindowLong (id, win32con.GWL_EXSTYLE ) | win32con.WS_EX_LAYERED )


win32gui.SetLayeredWindowAttributes(id, 100, 255, win32con.LWA_ALPHA) 

