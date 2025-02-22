import streamlit as st
from twilio.rest import Client 
import googlemaps

def get_location_name():
    # Initialize Google Maps client
    gmaps = googlemaps.Client(key='')
    
    # Get current location
    geocode_result = gmaps.geolocate()
    location = gmaps.reverse_geocode((geocode_result['location']['lat'], geocode_result['location']['lng']))
    location_name = location[0]['formatted_address']
    
    return location_name

def make_call_and_send_message():
    account_sid = ''
    auth_token = ''
    client = Client(account_sid, auth_token)    
    to_number = ''
    from_number = ''
    
    # Get current location name
    location_name = get_location_name()
    
    # Construct the message with location
    message_body = f"Emergency - Patient : Kartik , Age : 22 , Health condition : Critical , Blood Group : O positive , Location : Anurag University"
    
    # Make a call
    call = client.calls.create(
                        twiml=f'<Response><Say>Emergency , Patient : Srikar , Age : 22 , Health condition : Critical , Blood Group : O positive , Location : {location_name} </Say></Response>',
                        to=to_number,
                        from_=from_number
    )
    st.success("Call SID: " + call.sid)
    
    # Send a message
    message = client.messages.create(
        to=to_number,
        from_=from_number,
        body=message_body
    )
    st.success("Message SID: " + message.sid)

def main():
    st.title("Emergency Alert System")
    st.write("Click the button below to send an emergency alert call and message.")
    
    if st.button("Send Emergency Alert"):
        make_call_and_send_message()

if __name__ == "__main__":
    main()