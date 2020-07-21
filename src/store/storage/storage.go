package storage

import (
	"encoding/json"
	"github.com/syndtr/goleveldb/leveldb"
	utildb "github.com/syndtr/goleveldb/leveldb/util"
	"gowww/store/models"
	"log"
)

type Lvdb struct {
	con *leveldb.DB
}

var GlobalDB, _ = leveldb.OpenFile("./dbtemp", nil)

func NewLevDb() *Lvdb {
	return &Lvdb{con: GlobalDB}
}

// Create insert new item
func (s *Lvdb) CreateItem(item *models.Article) error {
	if item != nil {
		itemstr, merr := json.Marshal(item)
		if merr == nil {
			db := s.con
			err := db.Put([]byte(item.Type+"##"+item.Title), []byte(itemstr), nil)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

// Create insert new item
func (s *Lvdb) DeleteItem(item *models.Article) error {

	db := s.con
	err := db.Delete([]byte(item.Type+"##"+item.Title), nil)
	if err != nil {
		return err
	}
	return nil
}

// GetDBSession returns a new connection from the pool
func (s *Lvdb) GetLevelDB() *leveldb.DB {
	return s.con
}

func (s *Lvdb) GetLevlOne(typestr string) (*models.Article, error) {

	db := s.con
	// type
	iter := db.NewIterator(utildb.BytesPrefix([]byte(typestr)), nil)
	defer iter.Release()

	if iter != nil {
		iter.Next()
		valuebytes := iter.Value()
		t := models.NewArticle()
		if err3 := json.Unmarshal(valuebytes, &t); err3 != nil {
			log.Fatalf("JSON unmarshling failed: %s", err3)
		} else {
			return t, nil
		}
	}
	err := iter.Error()
	return nil, err
}

func (s *Lvdb) GetLevlList(typestr string) ([]*models.Article, error) {

	ips := make([]*models.Article, 10)

	db := s.con
	iter := db.NewIterator(utildb.BytesPrefix([]byte(typestr)), nil)
	k := 0
	for iter.Next() {
		k++
		value := iter.Value()
		t := models.NewArticle()
		if err3 := json.Unmarshal(value, &t); err3 != nil {
			log.Fatalf("JSON unmarshling failed: %s", err3)
			continue
		}
		ips[k] = t
		if k > 9 {
			break
		}
	}
	iter.Release()

	return ips, nil

}

// GetAll .
func (s *Lvdb) GetAll() ([]*models.Article, error) {

	icount := s.GetTotal()

	ips := make([]*models.Article, icount)

	db := s.con
	iter := db.NewIterator(nil, nil)
	k := 0
	for iter.Next() {
		value := iter.Value()
		t := models.NewArticle()
		if err3 := json.Unmarshal(value, &t); err3 != nil {
			log.Fatalf("JSON unmarshling failed: %s", err3)
			continue
		}
		ips[k] = t
		k++
	}
	iter.Release()

	return ips, nil
}

// GetItemById .
func (s *Lvdb) GetItemById(id string) (*models.Article, error) {

	db := s.con
	iter := db.NewIterator(nil, nil)
	defer iter.Release()

	for iter.Next() {
		value := iter.Value()
		t := models.NewArticle()
		if err3 := json.Unmarshal(value, &t); err3 != nil {
			log.Fatalf("JSON unmarshling failed: %s", err3)
			continue
		}
		if t.ID == id {
			return t, nil
		}
	}
	return nil, nil
}

func (s *Lvdb) GetTotal() int {
	db := s.con
	iter := db.NewIterator(nil, nil)
	k := 0
	for iter.Next() {
		k++
	}
	iter.Release()
	return k
}
