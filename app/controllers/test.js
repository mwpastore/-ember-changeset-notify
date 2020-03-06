import Controller from '@ember/controller';

import { tracked } from '@glimmer/tracking';

export default class TestController extends Controller {
  @tracked
  useChangeset;
}
