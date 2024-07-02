describe("Payments test (with setup and tear-down)", function() {
    beforeAll(function () {
      // initialization logic
      // needs input values
      billAmtInput.value = 125.65;
      tipAmtInput.value = 28.90;

    });
  
    it('should return valid for positive values', function () {
      // createCurPayment() will return undefined with negative or empty inputs
        // positive billAmt is required but tip can be 0

        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments.payment1.tipPercent).toBeCloseTo(23);
  
    });

    it('should return undefined for a negative or empty input', function () {
      // createCurPayment() will return undefined with negative or empty inputs
        // positive billAmt is required but tip can be 0
        billAmtInput.value='';
        submitPaymentInfo();
        expect(Object.keys(allServers).length).toEqual(0);

        billAmtInput.value=0;
        submitPaymentInfo();
        expect(Object.keys(allServers).length).toEqual(0);
  
    });

    afterAll(function() {
      // teardown logic
      billAmtInput.value='';
      tipAmtInput.value='';
      allPayments={};
      paymentTbody.remove();
      updateSummary();
    });
  });