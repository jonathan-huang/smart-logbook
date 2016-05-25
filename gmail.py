import tornado.ioloop
import tornado.web
import smtplib

import time

class emailHandler(tornado.web.RequestHandler):
    def get(self):
	    ctime = time.localtime(time.time())
		
        self.add_header("Access-Control-Allow-Origin", "*")
        email = self.get_argument("email")
        with open("emailFile.txt", "a") as emailFile:
            emailFile.write(email + "\n")
            
        sender = 'snazzyemailsender@gmail.com'
        receivers = ['huang20041014@gmail.com']

        message = 
		"""You logged: """ + #text
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
    app.listen(95)
    tornado.ioloop.IOLoop.current().start()


