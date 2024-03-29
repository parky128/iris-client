import { IRISClient } from '../src/index';
import { expect, assert } from 'chai';
import { describe, before } from 'mocha';
import * as sinon from 'sinon';

const serviceName = 'iris';

afterEach(() => {
  sinon.restore();
});
describe('Iris Client Test Suite:', () => {
  describe('when fetching elaborations', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getElaborations('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when performing dsl translate', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.dslTranslate({query_string: ['LIKE foo', 'LIKE bar']});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting constants', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getConstants();
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when performing search translate', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.searchTranslate({search_request: ['LIKE foo', 'LIKE bar']});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting assocaited elaborations', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getAssociatedElaborations('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting attatched elaborations', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getAttatchedElaborations('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when performing incident search', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    const testQuery = {query: {select: ["* FROM foo"],where: {between: "exists"},order_by: ["stuff, ASC"],limit: 10}};
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.incidentSearch('1234', testQuery);
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting an incident', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getIncidentById('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting incident history', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getIncidentHistory('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting aggregations', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.getAggregationsForFields('1234');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when updating a note', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'set');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call set() on the ALClient instance', async() => {
      await IRISClient.updateNote('1234', '0987', '4567', {note: "This is a note"});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when batch updating a note', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.incidentStatusBatchUpdate('1234', {operation: "Update", reason_code: "Because", notes: "This is a note", incidents: ['0987']});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when listing incident notes', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getIncidentNoteList('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when adding a new incident note', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.newIncidentNote('1234', '0987', {note: "This is a note"});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when batch updating feedback', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.incidentFeedbackBatchUpdate('1234', {operation: "Update", reason_code: "Because", notes: "This is a note", incidents: ['0987']});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when closing an incident', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.closeIncident('1234', '0987', {reason_code: "Because", notes: "This is a note"});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when reopening an incident', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.reopenIncident('1234', '0987', {notes: "This is a note"});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when getting the long incident id', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await IRISClient.getIncidentId('1234', '0987');
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when snoozing incidents', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.snoozeIncidents('1234', {period_ms: 1, reason_code: "Because", notes: "This is my note.", incidents: ['0987']});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when snoozing an incident', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.snoozeIncident('1234', '0987', {period_ms: 1, reason_code: "Because", notes: "This is my note."});
      expect(stub.callCount).to.equal(1);
    });
  });
  describe('when undoing an incident action by token', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(IRISClient['alClient'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async() => {
      await IRISClient.incidentUndoByToken('1234', {performed_by: "Barry", total_updated: 1, update_time: 1});
      expect(stub.callCount).to.equal(1);
    });
  });
    
});
