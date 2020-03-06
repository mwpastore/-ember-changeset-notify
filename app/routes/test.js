import Route from '@ember/routing/route';

import { tracked } from '@glimmer/tracking';

class Dummy {
  @tracked
  foo;

  @tracked
  bar;
}

export default class TestRoute extends Route {
  model() {
    return new Dummy();
  }
}
