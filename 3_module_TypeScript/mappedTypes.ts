//Type casting(приведение к типу)
const mistake = [] as Array<number>;
mistake.push(1);
// mistake.push('1');

let bigObject = {
    "commit": {
        "id": "13515151sgsgsg51351351351sgsf3513513",
        "short_id": "13515151",
        "title": "JS fix",
        "author_name": "Example User",
        "author_email": "user@example.com",
        "created_at": "2014-02-27T10:27:00+02:00"
    },
    "commits": [{
        "id": "13515151sgsgsg51351351351sgsf3513513",
        "short_id": "13515151",
        "title": "JS fix",
        "author_name": "Example User",
        "author_email": "user@example.com",
        "created_at": "2014-02-27T10:27:00+02:00"
    }],
    "diffs": [{
        "old_path": "files/js/application.js",
        "new_path": "files/js/application.js",
        "a_mode": null,
        "b_mode": "100644",
        "new_file": false,
        "renamed_file": false,
        "deleted_file": false
    }],
    "compare_timeout": false,
    "compare_same_ref": false
};

bigObject.compare_same_ref = true; // перезаписали значение в массиве
//bigObject.compare_same_ref = 'true'; // при попытке записать другой тип данных, TS выдает ошибку

type TMyBigObject = typeof bigObject;//типизировали bigObject

const typedBigObject: Readonly<TMyBigObject> = bigObject;

//typedBigObject.compare_same_ref = true;// при попытке записать другое значенте во внешний ключ, TS выдает ошибку
typedBigObject.commit.id = "123";// при попытке записать другое значенте во внутренний ключ, всё нормально




