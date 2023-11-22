from random import randint
from random import choice
from datetime import datetime
import json
import requests

class Servidores:
    def __init__(self):
        self.districtDB = ['salvador', 'feira de santana', 'lauro de freitas']
        self.cityDB = ['salvador', 'feira de santana', 'lauro de freitas']
        self.name = ['Mia Jacobs','Hashim Sutton','Leigh Raymond','Kiara Rich','Zelenia Owen',"Shawna Robel",
                     "Ruby Parisian","Jose McDermott","Marlon Sipes","Ruben Powlowski","Johanna Murray",
                     "Johnnie Douglas Jr.","Veronica Shanahan","Elmer Dietrich","Everett Murphy DDS","Sherri Deckow",
                     "Glenn Toy","Melanie Gibson III","Wesley Padberg","Natalie Considine","Miss Irene Green",
                     "Thomas Yost-Lynch","Lorenzo Jacobson","Ms. Dolores Nolan","Natasha Homenick"]
        self.email = ['@gmail.com', '@yahoo.com.br', '@yahoo.com']
    def randomCPF(self):
        return randint(11111111111, 99999999999)
    def randomCNH(self):
        return randint(11111111111, 99999999999)
    def randomCNH_CAT(self):
        return choice(['A','A','A','A','A','A','A','B','B','B','B','AB', 'C', 'D','E'])
    def randomDistrict(self):
        return choice(self.districtDB)
    def randomCity(self):
        return choice(self.cityDB)
    def randomGP(self):
        return choice(['i', 'ii', 'iii', 'iv'])
    def randomDateTime(self, year_start=2000, year_end=2023):
        day = randint(1,27)
        month = randint(1,12)
        year = randint(year_start, year_end)
        hour = randint(1,23)
        minutes = randint(1,59)
        seconds = randint(1,59)
        return datetime(year, month, day, hour, minutes, seconds)
    def getRandomDate(self):
        randomDate = self.randomDateTime()
        return randomDate.strftime('%Y-%m-%d')
    def getRandomTime(self, zero=False):
        randomDate = self.randomDateTime()
        return randomDate.strftime('%H:%M:%S')
    def randomTimeFixed(self):
        return choice([
            ('05:00:00','17:00:00'), ('06:00:00','18:00:00'), 
            ('07:00:00','19:00:00'), ('08:00:00','20:00:00')
            ])
    def randomOffice(self):
        return choice(['agt transito', 'supervisor', 'coordenador', 'gerente', 'administrativo'])
    def randomCell(self):
        number = randint(11111111111, 99999999999)
        return str(number)
    def randomMat(self):
        number = randint(1111111, 9999999)
        return str(number) 
    def randomStatus(self):
        return choice(['ativo','ativo','ativo','ativo','ativo','ativo','ativo', 'exonerado', 'l_medica', 'l_premio', 'emprestado'])
    def randomPerson(self):
        name = choice(self.name)
        split_name = self.name[randint(0,len(self.name)-1)].split(' ')
        email = ''
        count = 0
        aux = randint(1,len(split_name))
        while count < aux:
            random = randint(0,len(split_name)-1)
            email = email + split_name[random]
            count = count +1
        random = randint(0,len(self.email)-1)
        email = email + self.email[random]
        return (name, email)
    def randomGenere(self):
        return choice(['m', 'f'])
    
    def create(self):
        person = self.randomPerson()
        time = self.randomTimeFixed()
        return {
            'status': self.randomStatus(),
            'name': person[0],
            'mat': self.randomMat(),
            'email': person[1],
            'genere': self.randomGenere(),
            'personal_cell': self.randomCell(),
            'work_cell': self.randomCell(),
            'office':self.randomOffice(),
            'begin_hour':time[0],
            'exit_hour':time[1],
            'admission': self.getRandomDate(),
            'gp': self.randomGP(),
            'cpf':self.randomCPF(),
            'cnh': self.randomCPF(),
            'cat_cnh': self.randomCNH_CAT(),
            'district':self.randomDistrict(),
            'city': self.randomCity()
        }
    def save(self):
        person = self.create()
        return json.dumps(person)


if __name__ == '__main__':
    url = 'http://127.0.0.1:8000/api_v1/servidores/'

    for _ in range(100):
        person = Servidores()
        response = requests.post(url, json=person.create())
        print(response.status_code)