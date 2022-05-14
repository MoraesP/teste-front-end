import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { CardapioService } from './ cardapio.service';

describe('CardapioService', () => {
  let injector: TestBed;
  let service: CardapioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardapioService],
    });

    injector = getTestBed();
    service = injector.get(CardapioService);
  });

  it('Deve criar o serviço com sucesso', () => {
    expect(service).toBeTruthy();
  });

  describe('listar', () => {
    it('Deve retornar uma lista de categorias com produtos', () => {
      service.getCardapio().subscribe((categorias) => {
        expect(categorias.length).toBe(2);
      });
    });
  });
});
