import tornado.ioloop
import tornado.web
import smtplib

import time

class emailHandler(tornado.web.RequestHandler):
    def get(self):
	    ctime = time.localtime(time.time())
		
        self.add_header("Access-Control-Allow-Origin", "*")
        email = self.get_argument("email")
        log = self.get_argument("log")
        with open("emailFile.txt", "a") as emailFile:
            emailFile.write(email + "\n")
            
        sender = 'snazzyemailsender@gmail.com'
        receivers = [email, "programmelearn@gmail.com"]

        message = 
		"""You logged: """ + log
		+ """ at """ + ctime


        try:
           smtpObj = smtplib.SMTP_SSL('smtp.gmail.com:465')
           smtpObj.login("snazzyemailsender@gmail.com", "wsxcdeWSXCDE99!")
           smtpObj.sendmail(sender, receivers, message)         
        except SMTPException:
           print "Error: unable to send email"
        finally:
           smtpObj.quit()
            


if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", emailHandler),
    ])
    app.listen(94)
    tornado.ioloop.IOLoop.current().start()


