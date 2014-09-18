import win32com.client

shell = win32com.client.Dispatch("WScript.Shell")
#shell.SendKeys('%{F4}'): Alt + F4
shell.SendKeys('1')
shell.SendKeys('2')
shell.SendKeys("{LEFT}")
shell.SendKeys('3')


