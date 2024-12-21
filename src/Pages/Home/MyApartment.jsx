const MyApartment = () => {
  return (
    <div className="overflow-hidden h-full rounded-lg">
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.2100995363938!2d91.8875911652147!3d24.88564479573848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab368c188439%3A0xbfa8ff575187304d!2sShahjalal%20Upashahar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1734755690795!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shahjalal Uposhahar Map"
      ></iframe>
    </div>
  );
};

export default MyApartment;
